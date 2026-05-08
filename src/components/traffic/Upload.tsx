import { Upload as UploadIcon, Image, Video, Camera, FileUp } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeader } from "./Dashboard";

export function UploadSection() {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <section className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Inference Console" title="Upload. Detect. Predict." subtitle="Drop a traffic clip, an image, or activate live webcam to run on-device inference." />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <div
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) setFile(f.name); }}
            onClick={() => ref.current?.click()}
            className={`glass relative flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed p-8 text-center transition-all lg:col-span-2 ${drag ? "border-[var(--neon-cyan)] neon-glow" : "border-white/10 hover:border-[var(--neon-purple)]/60"}`}
          >
            <input ref={ref} type="file" hidden onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0].name)} />
            <div className="absolute inset-0 grid-bg opacity-20 rounded-2xl" />
            <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[var(--gradient-neon)] neon-glow">
              <UploadIcon className="h-7 w-7 text-black" />
            </div>
            <div className="relative mt-5 text-xl font-semibold">{file ? `Selected: ${file}` : "Drag & drop traffic media"}</div>
            <p className="relative mt-2 text-sm text-muted-foreground">MP4, MOV, AVI, JPG, PNG up to 500MB · or click to browse</p>
            <div className="relative mt-6 flex gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5"><Video className="h-3.5 w-3.5" /> Video</span>
              <span className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5"><Image className="h-3.5 w-3.5" /> Image</span>
              <span className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5"><FileUp className="h-3.5 w-3.5" /> Stream</span>
            </div>
          </div>

          <div className="glass flex flex-col items-center justify-center rounded-2xl p-8 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl glass-strong">
              <Camera className="h-7 w-7 text-[var(--neon-purple)]" />
            </div>
            <div className="mt-5 text-lg font-semibold">Live Webcam</div>
            <p className="mt-2 text-xs text-muted-foreground">Detect vehicles in real-time using your local camera feed.</p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-neon)] px-5 py-2.5 text-xs font-semibold text-black neon-glow transition-transform hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-black/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
              </span>
              Start Detection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
