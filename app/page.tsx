import Image from "next/image"
import { BlockCard } from "@/components/ui/block-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MultiSelectCombobox } from "@/components/multi-select-combobox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import * as SelectPrimitive from "@radix-ui/react-select"

const categoryOptions = [
  { value: "hero", label: "Hero Sections" },
  { value: "feature", label: "Feature Sections" },
  { value: "pricing", label: "Pricing Tables" },
  { value: "testimonial", label: "Testimonials" },
  { value: "contact", label: "Contact Forms" },
  { value: "faq", label: "FAQ Sections" },
  { value: "cta", label: "Call to Action" },
  { value: "footer", label: "Footers" },
  { value: "header", label: "Headers" },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="p-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-t from-white to-zinc-50 border border-zinc-100 rounded-2xl shadow-sm p-4 flex items-center justify-between">
          <div>
            <span className="font-semibold text-md">Vibe Kickstarter</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-zinc-500 text-sm font-medium hover:text-zinc-800">
              Favorites
            </a>
            <a href="#" className="text-zinc-500 text-sm font-medium hover:text-zinc-800">
              Submit a resource
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline">Login</Button>
            <Button variant="gradient">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-5xl font-medium tracking-tighter text-gray-900 font-sans">
              Kick start your Vibe Coding projects
            </h1>
            <p className="text-gray-500 text-md">
              A collection of handy resources to use whilst building projects with AI.
            </p>
          </div>

          <div className="bg-gradient-to-t from-fuchsia-300 to-fuchsia-400 border border-fuchsia-400 rounded-2xl shadow-md p-4 flex items-center justify-between mb-6">
            <p className="text-lg text-white font-medium text-shadow-lg">
              Have a resource that you think others will find useful?
            </p>
            <Button variant="opacity">Submit a kickstarter resource</Button>
          </div>
        </div>
      </section>

      {/* Block Grid */}
      <section className="container mx-auto px-4 pb-16">
        {/* Filter Controls */}
        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-4 justify-between space-y-4 md:space-y-0">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Input type="search" placeholder="Search resources..." className="w-full md:w-64" />
              <div className="w-32">
                <MultiSelectCombobox
                  options={categoryOptions}
                  placeholder="Filter"
                  searchPlaceholder="Search categories..."
                  emptyMessage="No categories found."
                />
              </div>
            </div>

            <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="name-asc">Name A-Z</SelectItem>
                  <SelectItem value="name-desc">Name Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Block 1 */}
            <BlockCard title="Blocks Built With Shadcn & Tailwind" label="SAVE" />

            {/* Block 2 */}
            <BlockCard title="Build faster with Shadcnblocks" label="Save" />

            {/* Block 3 */}
            <BlockCard title="A Collection of Components Built With Shadcn & Tailwind" label="Save" />

            {/* Block 4 */}
            <BlockCard title="Build your next project with Blocks" label="Save" />

            {/* Block 5 */}
            <BlockCard title="This is a heading for your new project" label="Save" />

            {/* Block 6 */}
            <BlockCard title="Why Work With Us?" label="Save" />

            {/* Block 7 */}
            <BlockCard title="Welcome to Our Website" label="HERO34" />

            {/* Block 8 */}
            <BlockCard title="A system crafted for team success and growth" label="HERO25" />

            {/* Block 9 */}
            <BlockCard title="Develop, launch, and grow your service with our platform" label="HERO24" />

            {/* More blocks can be added as needed */}
          </div>
        </div>
      </section>
    </div>
  )
}


