export const fetchCategories = () => {
  const query = `*[_type == "category"] {_id, slug, name}`;
  return query;
};

export const fetchProducts = (categorySlug: string) => {
  const query = `*[_type == "product" && category->slug.current== "${categorySlug}"] 
  {_id,
    slug,
    name,
    image{
      asset->{url}
    },
    price,
     description,
     category->{
      _id,
      name,
      slug
     }
    }
  `;
  return query;
};

export const fetchProduct = (productSlug: string) => {
  const query = `*[_type == "product" && slug.current== "${productSlug}"] 
  {_id,
    slug,
    name,
    image{
      asset->{url}
    },
    price,
     description,
     category->{
      _id,
      name,
      slug
     }
    }
  `;
  return query;
};
