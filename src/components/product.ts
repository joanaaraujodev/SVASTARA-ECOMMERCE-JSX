import * as React from "react";

export interface Product {
  availabilityStatus: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number | string;
  returnPolicy: string;
  shippingInformation: string;
  title: string;
  warrantyInformation: string;
  brand:string;
}

export interface ProductDetail {
  title?: string;
  description?: string;
  category?: string;
  img?: string;
  price?: string | number;
  brand?: string;
  warranty?: string;
  shipping?: string;
  availability?: string;
  returnPolicy?: string;
  productId?: number ;
  id?:number;
  images?:string;
  warrantyInformation?:string;
  shippingInformation?:string;
  availabilityStatus?:string;
}

export interface FavProduct {
  id: number;
  title: string;
  img: string;
  price: number | string;
  category: string;
}

export interface ProductCardProps {
  img: string;
  title: string;
  price: number | string;
  category: string;
  productId: number;
  className: string;
  bin?: string;
  hasFooter?: boolean;
  hasButton?: boolean;
  hasBin?: boolean;
  addToFavs?: boolean;
}

export interface CartProduct {
  id: number;
  title: string;
  price: number|string;
  img: string;
  category: string;
}
