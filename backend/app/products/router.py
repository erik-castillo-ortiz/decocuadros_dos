from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException
import requests

from app.pagination import Params
# from app.moderations.schemas import GetPublicationByIdPaginationOut
from app.products.services import ProductService

router = APIRouter()

@router.get("")
def get_products(
    # params: Params = Depends(),
    params: Params = Depends(),
    service: ProductService = Depends()
):
    (data,err) = service.get_products(params)
    # (data, err) = service.get_product_by_id(1)
    if err:
        raise HTTPException(status_code=err.status_code, detail=err.detail)
    
    return data

@router.get("/{slug}")
def get_product_by_slug(
    slug: str,
    service: ProductService = Depends(),
):
    data, err = service.get_product_by_slug(slug)
    if err:
        raise HTTPException(status_code=err.status_code, detail=err.detail)
    return data

@router.get("/{id}")
def get_products(
    id: int, 
    service: ProductService = Depends()
):
    (data,err) = service.get_product_by_id(id)
    if err:
        raise HTTPException(status_code=err.status_code, detail=err.detail)
    
    return data

@router.get("/variant/{variant_id}")
def get_product_by_variant_id(
    variant_id: int,
    service: ProductService = Depends(),
):
    data, err = service.get_product_by_variant_id(variant_id)
    if err:
        raise HTTPException(status_code=err.status_code, detail=err.detail)
    return data
