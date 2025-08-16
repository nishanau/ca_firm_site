'use client';

import { getContactInfo } from '@/config/settingsUtils';

interface GoogleMapProps {
  url?: string;
}

export default function GoogleMap({ url }: GoogleMapProps) {
  const { googleMapsUrl } = getContactInfo();
  const mapUrl = url || googleMapsUrl;
  
  return (
    <div className="map-container">
      <iframe
        src={mapUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      />
      
      <style jsx>{`
        .map-container {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
      `}</style>
    </div>
  );
}
