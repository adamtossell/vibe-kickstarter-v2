import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-t from-zinc-600 to-zinc-950 text-white border border-zinc-600 hover:from-zinc-950 hover:to-zinc-600 transition-colors duration-200",
        white:
          "bg-gradient-to-t from-zinc-50 to-white border border-zinc-200 text-secondary-foreground hover:from-white hover:to-zinc-50 hover:border-zinc-300 transition-colors duration-200",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-zinc-200 bg-transparent hover:bg-zinc-100 hover:text-zinc-900",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-t from-fuchsia-300 to-fuchsia-400 text-white border-fuchsia-500 hover:from-fuchsia-400 hover:to-fuchsia-300 transition-colors duration-200",
        opacity:
          "bg-gradient-to-t from-white/0 to-white/15 text-white border border-white border-opacity-40 hover:from-white/15 hover:to-white/0 hover:border-opacity-60 transition-colors transition-opacity duration-200 shadow-sm",
      },
      size: {
        default: "h-8 px-3 py-2",
        sm: "h-6 text-xs rounded-md px-2 py-2",
        lg: "h-10 px-8 py-3",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
