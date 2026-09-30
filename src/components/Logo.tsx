import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  showText = false,
  textColor = '#0F2B5C',
  subtextColor = '#64748B'
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Crest Emblem SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xs"
        aria-label="Aadrsh Documents Crest Logo"
      >
        <defs>
          {/* Shield Left Navy Gradient */}
          <linearGradient id="shieldNavyGrad" x1="80" y1="50" x2="180" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1B4282" />
            <stop offset="60%" stopColor="#0F2B5C" />
            <stop offset="100%" stopColor="#081A38" />
          </linearGradient>

          {/* Shield Right Gold Gradient */}
          <linearGradient id="shieldGoldGrad" x1="180" y1="50" x2="280" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2B755" />
            <stop offset="45%" stopColor="#C99834" />
            <stop offset="100%" stopColor="#9E731F" />
          </linearGradient>

          {/* Golden Checkmark Gradient */}
          <linearGradient id="checkGoldGrad" x1="130" y1="180" x2="270" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B38221" />
            <stop offset="25%" stopColor="#D8A53B" />
            <stop offset="60%" stopColor="#F5D073" />
            <stop offset="100%" stopColor="#C6942D" />
          </linearGradient>

          {/* Laurel Leaf Gold */}
          <linearGradient id="laurelGrad" x1="60" y1="120" x2="180" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E0B657" />
            <stop offset="100%" stopColor="#A87A24" />
          </linearGradient>

          {/* Inner Shield White/Cream fill */}
          <linearGradient id="innerShieldGrad" x1="180" y1="80" x2="180" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>

          {/* Soft Shadow for Checkmark */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#0F2B5C" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 1. Laurel Wreath (Left & Right Branches) */}
        <g id="laurel-wreath" fill="url(#laurelGrad)">
          {/* Left Branch Leaves */}
          <path d="M 172 295 C 145 285 110 262 90 225 C 75 198 70 165 72 135 C 74 145 80 185 105 218 C 122 240 148 262 172 272 Z" opacity="0.85" />
          
          {/* Left individual leaves */}
          <path d="M 85 138 C 70 128 62 142 72 156 C 78 165 92 160 92 150 C 92 142 88 140 85 138 Z" />
          <path d="M 75 168 C 60 162 55 178 68 189 C 76 195 90 188 88 178 C 86 172 80 170 75 168 Z" />
          <path d="M 74 200 C 60 198 58 214 72 224 C 82 229 93 220 90 210 C 88 204 80 201 74 200 Z" />
          <path d="M 84 230 C 72 232 72 248 88 254 C 98 257 107 246 102 238 C 98 232 90 231 84 230 Z" />
          <path d="M 103 257 C 92 262 96 278 112 280 C 122 281 129 270 123 262 C 118 256 110 256 103 257 Z" />
          <path d="M 129 278 C 120 285 128 300 142 298 C 152 297 156 286 148 280 C 143 276 135 277 129 278 Z" />

          {/* Right Branch Leaves */}
          <path d="M 188 295 C 215 285 250 262 270 225 C 285 198 290 165 288 135 C 286 145 280 185 255 218 C 238 240 212 262 188 272 Z" opacity="0.85" />
          
          {/* Right individual leaves */}
          <path d="M 275 138 C 290 128 298 142 288 156 C 282 165 268 160 268 150 C 268 142 272 140 275 138 Z" />
          <path d="M 285 168 C 300 162 305 178 292 189 C 284 195 270 188 272 178 C 274 172 280 170 285 168 Z" />
          <path d="M 286 200 C 300 198 302 214 288 224 C 278 229 267 220 270 210 C 272 204 280 201 286 200 Z" />
          <path d="M 276 230 C 288 232 288 248 272 254 C 262 257 253 246 258 238 C 262 232 270 231 276 230 Z" />
          <path d="M 257 257 C 268 262 264 278 248 280 C 238 281 231 270 237 262 C 242 256 250 256 257 257 Z" />
          <path d="M 231 278 C 240 285 232 300 218 298 C 208 297 204 286 212 280 C 217 276 225 277 231 278 Z" />
        </g>

        {/* 2. Main Shield Outer Border */}
        {/* Left Half (Navy) */}
        <path
          d="M 180 50 L 105 78 C 95 140 92 195 180 272 L 180 50 Z"
          fill="url(#shieldNavyGrad)"
        />
        {/* Right Half (Gold) */}
        <path
          d="M 180 50 L 255 78 C 265 140 268 195 180 272 L 180 50 Z"
          fill="url(#shieldGoldGrad)"
        />

        {/* 3. Inner Shield (White Body) */}
        <path
          d="M 180 64 L 117 88 C 110 142 110 186 180 254 C 250 186 250 142 243 88 L 180 64 Z"
          fill="url(#innerShieldGrad)"
        />

        {/* 4. Open Book / Document Graphics inside Shield */}
        {/* Left Book Page */}
        <g id="book-left" stroke="#103264" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 180 145 C 160 135 138 136 128 142 L 128 206 C 138 200 160 198 180 208 Z" fill="#FFFFFF" />
          {/* Inner line */}
          <path d="M 136 154 C 148 148 165 147 176 154" strokeWidth="2.5" opacity="0.6" />
          <path d="M 136 168 C 148 162 165 161 176 168" strokeWidth="2.5" opacity="0.6" />
        </g>

        {/* Right Book Page */}
        <g id="book-right" stroke="#103264" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 180 145 C 200 135 222 136 232 142 L 232 206 C 222 200 200 198 180 208 Z" fill="#FFFFFF" />
          {/* Inner line */}
          <path d="M 184 154 C 195 147 212 148 224 154" strokeWidth="2.5" opacity="0.6" />
          <path d="M 184 168 C 195 161 212 162 224 168" strokeWidth="2.5" opacity="0.6" />
        </g>

        {/* Book spine line */}
        <line x1="180" y1="145" x2="180" y2="216" stroke="#103264" strokeWidth="4" strokeLinecap="round" />

        {/* 5. Bold Golden Checkmark (Overlaid in 3D effect across Book) */}
        <g filter="url(#logoShadow)">
          {/* Main 3D gold checkmark */}
          <path
            d="M 152 186 L 180 226 L 274 96 C 265 92 248 100 240 108 L 180 192 L 164 170 Z"
            fill="url(#checkGoldGrad)"
          />
          {/* Checkmark bevel edge */}
          <path
            d="M 152 186 L 180 226 L 182 222 L 160 178 Z"
            fill="#8B6214"
            opacity="0.6"
          />
          <path
            d="M 180 226 L 274 96 C 268 94 256 102 240 108 L 180 218 Z"
            fill="#FFE8A3"
            opacity="0.45"
          />
        </g>

        {/* Base shadow ellipse */}
        <ellipse cx="180" cy="305" rx="55" ry="6" fill="#0F2B5C" opacity="0.12" />
      </svg>

      {/* Optional Brand Text Lockup */}
      {showText && (
        <div className="flex flex-col leading-none select-none">
          <div className="flex items-center text-base sm:text-lg font-black tracking-tight" style={{ color: textColor }}>
            <span>AADRSH&nbsp;</span>
            <span style={{ color: '#475569' }}>DOCUMENTS</span>
          </div>
          <span
            className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase mt-0.5"
            style={{ color: subtextColor }}
          >
            (SAVIER)
          </span>
        </div>
      )}
    </div>
  );
};
