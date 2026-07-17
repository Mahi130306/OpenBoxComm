'use client'

import { useState, useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { Upload, Download, RefreshCw, Sliders, Image as ImageIcon, CheckCircle, AlertCircle, Trash2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface CompressionStats {
  originalName: string
  originalSize: number
  originalWidth: number
  originalHeight: number
  originalType: string
  compressedSize: number
  compressedWidth: number
  compressedHeight: number
  compressedType: string
  savingsPercent: number
}

export function ImageCompressor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [originalUrl, setOriginalUrl] = useState<string>('')
  const [compressedUrl, setCompressedUrl] = useState<string>('')
  const [compressing, setCompressing] = useState<boolean>(false)
  const [quality, setQuality] = useState<number>(75) // 1-100
  const [format, setFormat] = useState<string>('image/jpeg') // image/jpeg, image/webp, image/png
  const [scale, setScale] = useState<number>(100) // 10-100%
  const [stats, setStats] = useState<CompressionStats | null>(null)
  const [error, setError] = useState<string>('')
  const [dragActive, setDragActive] = useState<boolean>(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Clean up Object URLs when unmounting or changing file
  useEffect(() => {
    return () => {
      if (originalUrl) URL.revokeObjectURL(originalUrl)
      if (compressedUrl) URL.revokeObjectURL(compressedUrl)
    }
  }, [originalUrl, compressedUrl])

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.')
      return
    }
    setError('')
    setSelectedFile(file)
    setStats(null)

    if (originalUrl) URL.revokeObjectURL(originalUrl)
    if (compressedUrl) URL.revokeObjectURL(compressedUrl)
    setOriginalUrl(URL.createObjectURL(file))
    setCompressedUrl('')

    // Set output format based on original type (default to webp/jpeg if not supported)
    if (file.type === 'image/png' || file.type === 'image/webp' || file.type === 'image/jpeg') {
      setFormat(file.type)
    } else {
      setFormat('image/jpeg')
    }
  }

  const onFilePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0])
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0])
    }
  }

  const triggerFilePicker = () => {
    fileInputRef.current?.click()
  }

  const handleCompress = async () => {
    if (!selectedFile) return

    setCompressing(true)
    setError('')

    try {
      const statsResult = await performCompression(
        selectedFile,
        quality / 100,
        format,
        scale / 100
      )
      setCompressedUrl(statsResult.url)
      setStats({
        originalName: selectedFile.name,
        originalSize: selectedFile.size,
        originalWidth: statsResult.originalWidth,
        originalHeight: statsResult.originalHeight,
        originalType: selectedFile.type,
        compressedSize: statsResult.size,
        compressedWidth: statsResult.width,
        compressedHeight: statsResult.height,
        compressedType: format,
        savingsPercent: Math.max(0, Math.round(((selectedFile.size - statsResult.size) / selectedFile.size) * 100)),
      })
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'An error occurred during image compression.')
    } finally {
      setCompressing(false)
    }
  }

  const performCompression = (
    file: File,
    qualityValue: number,
    outputType: string,
    scaleValue: number
  ): Promise<{ url: string; size: number; width: number; height: number; originalWidth: number; originalHeight: number }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => {
          const originalWidth = img.width
          const originalHeight = img.height

          // Calculate scaled dimensions
          const targetWidth = Math.max(1, Math.round(originalWidth * scaleValue))
          const targetHeight = Math.max(1, Math.round(originalHeight * scaleValue))

          const canvas = document.createElement('canvas')
          canvas.width = targetWidth
          canvas.height = targetHeight

          const ctx = canvas.getContext('2d')
          if (!ctx) {
            reject(new Error('Could not create canvas 2D context'))
            return
          }

          // Draw solid white background for JPEG/unsupported formats that do not support transparency
          if (outputType === 'image/jpeg') {
            ctx.fillStyle = '#FFFFFF'
            ctx.fillRect(0, 0, targetWidth, targetHeight)
          }

          ctx.drawImage(img, 0, 0, targetWidth, targetHeight)

          canvas.toBlob(
            (blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob)
                resolve({
                  url,
                  size: blob.size,
                  width: targetWidth,
                  height: targetHeight,
                  originalWidth,
                  originalHeight,
                })
              } else {
                reject(new Error('Failed to compress image'))
              }
            },
            outputType,
            qualityValue
          )
        }
        img.onerror = () => {
          reject(new Error('Failed to load image preview'))
        }
        img.src = event.target?.result as string
      }
      reader.onerror = () => {
        reject(new Error('Failed to read image file'))
      }
      reader.readAsDataURL(file)
    })
  }

  const handleDownload = () => {
    if (!compressedUrl || !stats) return

    const originalExtension = stats.originalName.substring(stats.originalName.lastIndexOf('.'))
    let newExtension = originalExtension
    if (format === 'image/jpeg') newExtension = '.jpg'
    else if (format === 'image/webp') newExtension = '.webp'
    else if (format === 'image/png') newExtension = '.png'

    const baseName = stats.originalName.substring(0, stats.originalName.lastIndexOf('.')) || stats.originalName
    const newName = `${baseName}-compressed${newExtension}`

    const link = document.createElement('a')
    link.href = compressedUrl
    link.download = newName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resetCompressor = () => {
    setSelectedFile(null)
    if (originalUrl) URL.revokeObjectURL(originalUrl)
    if (compressedUrl) URL.revokeObjectURL(compressedUrl)
    setOriginalUrl('')
    setCompressedUrl('')
    setStats(null)
    setError('')
  }

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="space-y-8">
      {/* Upload area or previews */}
      {!selectedFile ? (
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={triggerFilePicker}
          className={`group flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 text-center transition-all cursor-pointer ${
            dragActive
              ? 'border-cyan-500 bg-cyan-500/5'
              : 'border-border bg-surface/50 hover:border-cyan-500/50 hover:bg-surface'
          }`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={onFilePickerChange}
            accept="image/*"
            className="hidden"
          />
          <div className="mb-4 rounded-xl border border-border bg-muted p-4 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/5 transition-all">
            <Upload className="h-8 w-8 text-muted-foreground group-hover:text-cyan-500 transition-colors" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-foreground">Upload your image</h3>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
            Drag & drop your JPG, PNG, or WebP here, or click to browse files from your computer.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/60">
            All compression runs 100% locally in your browser. Your images never leave your device.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Controls Column */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-border bg-surface shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-cyan-500" />
                    Settings
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetCompressor}
                    className="h-8 w-8 text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
                    title="Remove Image"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>Adjust quality & dimensions to optimize size</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Format Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Output Format
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'WebP', value: 'image/webp' },
                      { label: 'JPEG', value: 'image/jpeg' },
                      { label: 'PNG', value: 'image/png' },
                    ].map((f) => (
                      <button
                        key={f.value}
                        type="button"
                        onClick={() => setFormat(f.value)}
                        className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                          format === f.value
                            ? 'border-cyan-500 bg-cyan-500/10 text-cyan-500'
                            : 'border-border bg-muted/30 text-muted-foreground hover:border-border/80 hover:text-foreground'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quality Slider - Disabled for PNG as PNG is lossless */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Quality
                    </label>
                    <span className="text-xs font-bold text-foreground">
                      {format === 'image/png' ? 'Lossless (100%)' : `${quality}%`}
                    </span>
                  </div>
                  <Input
                    type="range"
                    min="5"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    disabled={format === 'image/png'}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-cyan-500"
                  />
                  {format === 'image/png' && (
                    <p className="text-[10px] text-muted-foreground leading-normal">
                      PNG uses lossless compression. To reduce PNG size, adjust the Scale slider below.
                    </p>
                  )}
                </div>

                {/* Scale Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Scale (Dimensions)
                    </label>
                    <span className="text-xs font-bold text-foreground">{scale}%</span>
                  </div>
                  <Input
                    type="range"
                    min="10"
                    max="100"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-cyan-500"
                  />
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button
                  onClick={handleCompress}
                  disabled={compressing}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold flex items-center justify-center gap-2"
                >
                  {compressing ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Compressing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      Apply Compression
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            {/* Error Display */}
            {error && (
              <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-500 text-xs">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{error}</p>
              </div>
            )}

            {/* Compressed Stats card */}
            {stats && (
              <Card className="border-2 border-cyan-500 bg-surface shadow-md shadow-cyan-500/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Compression Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3.5 text-center border border-cyan-500/20">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-cyan-500 mb-1">Total File Size Reduced By</p>
                    <p className="text-3xl font-black text-foreground">{stats.savingsPercent}%</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Saved {formatSize(stats.originalSize - stats.compressedSize)}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">Original File Size:</span>
                      <span className="font-bold">{formatSize(stats.originalSize)}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">Compressed File Size:</span>
                      <span className="font-bold text-cyan-500">{formatSize(stats.compressedSize)}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">Dimensions:</span>
                      <span className="font-bold">
                        {stats.originalWidth}x{stats.originalHeight} → {stats.compressedWidth}x{stats.compressedHeight}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Output format:</span>
                      <span className="font-bold uppercase tracking-wider">{stats.compressedType.split('/')[1]}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleDownload}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Image
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          {/* Previews Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Original Preview */}
              <Card className="border-border bg-surface overflow-hidden flex flex-col">
                <CardHeader className="py-4 border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Original Image</CardTitle>
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {formatSize(selectedFile.size)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-4 bg-muted/10 flex items-center justify-center min-h-[300px] relative">
                  {originalUrl && (
                    <img
                      src={originalUrl}
                      alt="Original Preview"
                      className="max-h-[350px] object-contain rounded-lg border border-border shadow-sm"
                    />
                  )}
                </CardContent>
              </Card>

              {/* Compressed Preview */}
              <Card className="border-border bg-surface overflow-hidden flex flex-col">
                <CardHeader className="py-4 border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">Compressed Preview</CardTitle>
                    {stats ? (
                      <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-500 border-none text-[10px] font-bold">
                        {formatSize(stats.compressedSize)}
                      </Badge>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">Ready to compress</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-4 bg-muted/10 flex items-center justify-center min-h-[300px] relative">
                  {compressedUrl ? (
                    <img
                      src={compressedUrl}
                      alt="Compressed Preview"
                      className="max-h-[350px] object-contain rounded-lg border border-border shadow-sm"
                    />
                  ) : (
                    <div className="text-center py-12 opacity-40">
                      <ImageIcon className="h-10 w-10 mx-auto mb-3 opacity-20" />
                      <p className="text-xs">Adjust settings & click 'Apply Compression' to see output preview</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
