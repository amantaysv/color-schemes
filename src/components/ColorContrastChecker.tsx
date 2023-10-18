import { useState } from 'react'

type RGBType = [number, number, number]

const hexToRgb = (hex: string): RGBType => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0]
}

const getLuminance = (RGB: RGBType) => {
  const a = RGB.map((value) => {
    value /= 255
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

export const ColorContrastChecker = () => {
  const [value1, setValue1] = useState('')
  console.log('ColorContrastChecker ~ value1:', value1)
  const [value2, setValue2] = useState('')

  const [RGB, setRGB] = useState<RGBType>([0, 0, 0])
  const [luminance, setLuminance] = useState(0)
  console.log('ColorContrastChecker ~ luminance:', luminance)
  console.log('ColorContrastChecker ~ result1:', RGB)

  const onChangeHandle1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(e.currentTarget.value)
    setRGB(hexToRgb(e.currentTarget.value))
    setLuminance(getLuminance(hexToRgb(e.currentTarget.value)))
  }

  return (
    <div>
      <input type='color' value={value1} onChange={onChangeHandle1} />
      <input type='text' value={value2} onChange={(e) => setValue2(e.currentTarget.value)} />
      <button>Calculate Color Contrast</button>
      <div></div>
    </div>
  )
}
