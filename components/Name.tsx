'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type NameProps = {
  variant?: '#6abe27' | '#e9b70b' | '#2236f0'
}

export default function Name({ variant = '#6abe27' }: NameProps) {
  const [text, setText] = useState('Team name')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newText = formData.get('text') as string
    setText(newText)
    setIsOpen(false)
  }

  return (
    <div className="flex items-center space-x-4 p-4">
      <svg className="h-10 w-auto" viewBox="0 0 44 44" preserveAspectRatio="xMidYMid meet">
        {/* Outer red outline */}
        <polygon 
          points="11,2 33,2 44,22 33,42 11,42 0,22"
          fill="none"
          stroke="red"
          strokeWidth="2"
        />
        {/* Inner black outline and conditional fill */}
        <polygon 
          points="12,4 32,4 42,22 32,40 12,40 2,22"
          fill={variant}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="text-xl hover:underline focus:outline-none">
            {text}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Team Name</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input 
              name="text"
              defaultValue={text}
            />
            <Button type="submit">Save</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
