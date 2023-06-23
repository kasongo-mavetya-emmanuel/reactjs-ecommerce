export const fetchCategories = () => {
  const query = `*[_type == "category"] {_id, slug, name}`;
  return query;
};

export const fetchProducts = (categorySlug: string) => {
  console.log(categorySlug);
  const query = `*[_type == "product"] 
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
    }*[category.slug.current== ${categorySlug}]
  `;
  return query;
};
