export interface ProductSechema {
    items: Item[];
    search_criteria: Searchcriteria;
    total_count: number;
  }
  
  interface Searchcriteria {
    filter_groups: Filtergroup[];
  }
  
  interface Filtergroup {
    filters: Filter[];
  }
  
  interface Filter {
    field: string;
    value: string;
    condition_type: string;
  }
  
  interface Item {
    id: number;
    sku: string;
    name: string;
    attribute_set_id: number;
    price: number;
    status: number;
    visibility: number;
    type_id: string;
    created_at: string;
    updated_at: string;
    extension_attributes: Extensionattributes;
    product_links: any[];
    options: any[];
    media_gallery_entries: Mediagalleryentry[];
    tier_prices: any[];
    custom_attributes: Customattribute[];
  }
  
  interface Customattribute {
    attribute_code: string;
    value: string[] | string;
  }
  
  interface Mediagalleryentry {
    id: number;
    media_type: string;
    label?: any;
    position: number;
    disabled: boolean;
    types: any[];
    file: string;
  }
  
  interface Extensionattributes {
    website_ids: number[];
    category_links: Categorylink[];
  }
  
  interface Categorylink {
    position: number;
    category_id: string;
  }