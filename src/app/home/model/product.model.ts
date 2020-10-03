interface Product {
    sku: string;
    name: string;
    media_gallery_entries: Mediagalleryentry[];
  }
  
  interface Mediagalleryentry {
    id: number;
    media_type: string;
    label?: any;
    position: number;
    disabled: boolean;
    types: string[];
    file: string;
  }