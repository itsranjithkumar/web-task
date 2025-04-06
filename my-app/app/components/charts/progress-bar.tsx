interface ProgressBarProps {
    value: number
    max: number
    color: string
    height?: number
    showLabel?: boolean
    label?: string
  }
  
  export default function ProgressBar({
    value,
    max,
    color,
    height = 8,
    showLabel = false,
    label = "",
  }: ProgressBarProps) {
    const percentage = (value / max) * 100
  
    return (
      <div className="w-full">
        {showLabel && (
          <div className="flex justify-between text-xs mb-1">
            <span>{label}</span>
            <span>
              {value}/{max}
            </span>
          </div>
        )}
        <div className="w-full bg-zinc-800 rounded-full overflow-hidden" style={{ height: `${height}px` }}>
          <div
            className="h-full rounded-full"
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          />
        </div>
      </div>
    )
  }
  
  