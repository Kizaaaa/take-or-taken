"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ColorChangeButtonProps {
  text?: string
}

export default function ColorChangeButton({ text = "Change Color" }: ColorChangeButtonProps) {
  const [buttonColor, setButtonColor] = useState("bg-[#540d0e]")
  const [isOpen, setIsOpen] = useState(false)

  const handleColorChange = (value: string) => {
    setButtonColor(value)
    setIsOpen(false)
  }

  const getButtonClasses = () => {
    return `${buttonColor} text-white border-4 border-yellow-400`
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="text-white">
        <Button
          className={getButtonClasses()}
          style={{ backgroundColor: buttonColor !== "bg-[#540d0e]" ? buttonColor : undefined }}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-white">Choose a color</DialogTitle>
        </DialogHeader>
        <RadioGroup onValueChange={handleColorChange} className="grid gap-4">
          {["#6bbe27", "#2336f0", "#eab80c"].map((color, index) => (
            <div key={color} className="flex items-center space-x-2">
              <RadioGroupItem value={color} id={color} />
              <Label htmlFor={color} className="capitalize flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full text-white"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-white">{["Green", "Blue", "Yellow"][index]}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </DialogContent>
    </Dialog>
  )
}