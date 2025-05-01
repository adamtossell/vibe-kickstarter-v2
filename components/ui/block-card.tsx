import Image from "next/image"
import { Button } from "./button"
import { Card } from "./card"
import { Badge } from "./badge"
import { MoreVertical, Copy, Heart, Download } from "lucide-react"

interface BlockCardProps {
  title: string
  label: string
}

export function BlockCard({ title, label }: BlockCardProps) {
  return (
    <Card className="overflow-hidden border border-zinc-100 rounded-lg shadow-sm">
      <div className="aspect-[4/3] bg-zinc-50 relative flex flex-col justify-start gap-5 p-5 h-full font-mono">
        <div className="flex justify-between">
          <Image src="/placeholder.svg" alt="Block icon" width={20} height={20} />
          <MoreVertical className="w-4 h-4 cursor-pointer text-zinc-500 hover:text-zinc-800 transition-colors duration-200" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zinc-800 font-bold text-md line-clamp-2">{title}</p>
          <p className="text-zinc-500 text-xs font-mono line-clamp-2">
          Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
          </p>
          <div className="flex flex-col gap-1.5 mt-1">
            <div className = "flex gap-2 pb-0.5 w-fit items-center border-b border-transparent text-zinc-400 hover:text-zinc-800 hover:border-b hover:border-zinc-800 cursor-pointer transition-colors duration-200">
              <Copy className="w-3 h-3" />
              <p className = "text-xs">Copy</p>
            </div>
            <div className = "flex gap-2 pb-0.5 w-fit items-center border-b border-transparent text-zinc-400 hover:text-zinc-800 hover:border-b hover:border-zinc-800 cursor-pointer transition-colors duration-200">
              <Download className="w-3 h-3" />
              <p className = "text-xs">Download</p>
            </div>
            <div className = "flex gap-2 pb-0.5 w-fit items-center border-b border-transparent text-zinc-400 hover:text-zinc-800 hover:border-b hover:border-zinc-800 cursor-pointer transition-colors duration-200">
              <Heart className="w-3 h-3" />
              <p className = "text-xs">Save</p>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center gap-2 mt-auto">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Supabase</Badge>
        </div> */}
      </div>
    </Card>
  )
}
