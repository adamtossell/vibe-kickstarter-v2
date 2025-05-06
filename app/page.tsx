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
        <div className="max-w-5xl mx-auto bg-gradient-to-t from-zinc-50 to-zinc-100 border border-zinc-100 rounded-2xl shadow-sm p-4 flex items-center justify-between">
          <div>
            <span className="font-semibold text-md text-zinc-950">Vibe Kickstarter</span>
          </div>


          <div className="flex items-center space-x-3">
            <Button variant="ghost">Login</Button>
            <Button variant="outline">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-5xl font-medium tracking-tighter text-gray-950 font-sans">
              Kick start your Vibe Coding projects
            </h1>
            <p className="text-gray-400 text-md">
              A collection of handy resources to use whilst building projects with AI.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-gradient-to-t from-fuchsia-300 to-fuchsia-400 border border-fuchsia-400 rounded-2xl shadow-lg p-6 items-stretch justify-between">
            <p className="text-sm font-mono text-fuchsia-100 font-bold tracking-tight">
              Have a resource that you think others will find useful?
            </p>
            <div className="flex items-center gap-2">
              <Input type="text" placeholder="Enter URL" className="max-w-sm focus:ring-fuchsia-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-fuchsia-200"/>
              <Button variant="opacity" className="w-fit">Submit</Button>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Block 1 */}
            <BlockCard 
              title="Shadcn registry MCP" 
              description={`https://x.com/shadcn/status/1917597228513853603`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177583/shadcn-ui_logo_yvwago.png"
            />

            {/* Block 2 */}
            <BlockCard 
              title="Firebase studio" 
              description={`npx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
pnpm dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json
yarn dlx shadcn@latest add https://supabase.com/ui/r/supabase-client-nextjs.json`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177451/firebase_studio_q63dwg.png"
            />

            {/* Block 3 */}
            <BlockCard 
              title="Supabase client libraries" 
              description={`npx create-supabase-app my-app
pnpm create supabase-app my-app
yarn create supabase-app my-app`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177489/supabase-logo-icon_h56xvs.png"
            />

            {/* Block 4 */}
            <BlockCard 
              title="Supabase password based auth" 
              description={`supabase.auth.signUp({ email, password })
supabase.auth.signIn({ email, password })
supabase.auth.signOut()`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177489/supabase-logo-icon_h56xvs.png"
            />

            {/* Block 5 */}
            <BlockCard 
              title="Supabase dropzone (file upload)" 
              description={`const { data, error } = await supabase.storage
  .from('bucket')
  .upload('file.pdf', file)`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177489/supabase-logo-icon_h56xvs.png"
            />

            {/* Block 6 */}
            <BlockCard 
              title="Supabase realtime chat" 
              description={`supabase.channel('room1')
  .on('INSERT', { event: 'message' }, handler)
  .subscribe()`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177489/supabase-logo-icon_h56xvs.png"
            />

            {/* Block 7 */}
            <BlockCard 
              title="Next.js starter project" 
              description={`npx create-next-app my-app
pnpm create next-app my-app
yarn create next-app my-app`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746178518/next_js_logo_d0gocu.svg"
            />

            {/* Block 8 */}
            <BlockCard 
              title="Supabase realtime cursor" 
              description={`supabase.channel('room1')
  .on('INSERT', { event: 'message' }, handler)
  .subscribe()`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177489/supabase-logo-icon_h56xvs.png"
            />

            {/* Block 9 */}
            <BlockCard 
              title="Supabase current user avatar" 
              description={`const { data, error } = await supabase.storage
  .from('avatars')
  .download('avatar.jpg')`} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177489/supabase-logo-icon_h56xvs.png"
            />

            {/* Block 10 */}
            <BlockCard 
              title="Shadcn blocks" 
              description={'https://www.shadcnblocks.com/'} 
              imageUrl="https://res.cloudinary.com/dcnfwqsi9/image/upload/v1746177675/shadcn-blocks_logo_osolzn.svg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
