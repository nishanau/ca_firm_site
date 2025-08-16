import Image from 'next/image';
import Link from 'next/link';
import { getFirmInfo } from '@/config/settingsUtils';

/**
 * Logo component
 * 
 * Displays either a text or image logo based on settings
 */
export default function Logo({ className = '' }: { className?: string }) {
  const { firmName, logo } = getFirmInfo();
  
  return (
    <div className={`logo ${className}`}>
      {logo.imagePath ? (
        <Link href="/">
          <Image 
            src={logo.imagePath} 
            alt={firmName} 
            width={150} 
            height={50} 
            priority
          />
        </Link>
      ) : (
        <Link href="/" className="logo-text">
          {logo.text}
        </Link>
      )}
    </div>
  );
}
