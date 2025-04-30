"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox" // Added Checkbox import

export type Option = {
  value: string
  label: string
}

interface MultiSelectComboboxProps {
  options: Option[]
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  className?: string
  onChange?: (values: string[]) => void
}

export function MultiSelectCombobox({
  options,
  placeholder = "Select options...",
  searchPlaceholder = "Search options...",
  emptyMessage = "No options found.",
  className,
  onChange,
}: MultiSelectComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedValues, setSelectedValues] = React.useState<string[]>([])
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSelect = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value]
    setSelectedValues(newSelectedValues)
    onChange?.(newSelectedValues)
    // Keep the popover open after selection for multi-select
    // setOpen(false) 
  }

  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent triggering popover
    setSelectedValues([])
    onChange?.([])
  }

  const filteredOptions = React.useMemo(() => {
    if (!searchQuery) return options
    return options.filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [options, searchQuery])

  // Get labels for display
  const selectedLabels = options
    .filter((option) => selectedValues.includes(option.value))
    .map((option) => option.label)
    .join(", ")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          <span className="truncate">
            {selectedValues.length > 0 ? `${selectedValues.length} selected` : placeholder}
          </span>
          <div className="ml-2 flex flex-shrink-0 items-center">
            {selectedValues.length > 0 && (
              <X
                className="mr-1 h-4 w-4 opacity-50 hover:opacity-100"
                onClick={clearAll}
                aria-label="Clear selection"
              />
            )}
            <ChevronsUpDown className="h-4 w-4 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0" align="start">
        <Command>
          <CommandInput placeholder={searchPlaceholder} value={searchQuery} onValueChange={setSearchQuery} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label} // Keep label for cmdk filtering
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Checkbox
                    checked={selectedValues.includes(option.value)}
                    onCheckedChange={() => handleSelect(option.value)}
                    onClick={(e) => e.stopPropagation()}
                    onPointerDown={(e) => e.preventDefault()}
                    aria-label={`Select ${option.label}`}
                    className="mr-2"
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
