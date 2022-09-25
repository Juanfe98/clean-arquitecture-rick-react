# Managing route components by feature

> Taked from React - The road to enterprise Chapter 3

Now imagine we have ten or more features that require CRUD functionality. We could quickly end up with a massive amount of files, and it would soon become a pain to manage. Therefore, let’s do it differently. Instead of keeping Product files at the top of the views folder, we will group them by a feature name. Let’s put all the files in the folder called `products` <-> <Feature name> 

e.g.

views
|-- products
|-- Products.tsx
|-- ViewProduct.tsx
|-- AddProduct.tsx
|-- EditProduct.tsx

All files that are related to the product feature are now kept together. Thanks to that, finding and managing route components should be much easier. We can also change routes config to follow a similar pattern and define product-related routes as children of the products path.

```typescript
<Route path="/products">
<Route index element={<Products />} />
<Route path="add" element={<AddProduct />}
<Route path=":id/edit" element={<EditProduct />} />
<Route path=":id/delete" element={<DeleteProduct />} />
<Route path=":id" element={<ViewProduct />} />
</Route>
```

How do we handle components that are used in the route components? Let’s take AddProduct.tsx and EditProduct.tsx as an example. Both will need a form component to allow a user to enter product details. Let’s assume that forms on both pages are so similar that we can reuse one instead of creating two form components. But where do we put the ProductForm.tsx file? Besides, let’s say that the ProductForm.tsx file will require some utility functions and a service file to contain business logic. The first thought might be to put these files based on what they contain. Therefore, ProductForm.tsx would land in the components folder, as it would be used on more than one page, productFormService.ts in the services folder, and utility functions in the helpers folder. We would end up with this setup:

```
src
  |-- components
  | |-- common
  |    |-- products
  |      |-- ProductForm.tsx
  |-- services
  |  |-- productFormService.ts
  |-- helpers
  |  |-- productFormUtils.ts
  |-- views
  |  |-- products
  |    |-- Products.tsx
  |    |-- ViewProduct.tsx
  |    |-- AddProduct.tsx
  |    |-- EditProduct.tsx
  |    |-- DeleteProduct.tsx
```

There are a few problems with this approach:

1. we just created a few files and put them in different folders, and with more features and files, the project will get messy very quickly.

2. You might think that the code you are writing, be it a component or a service, might be shared and used for some other feature in the future. **But the truth is, if you are working in a team on a large project, there is a very high chance that it will not**. Other team members might not know that your code even exists, or it might require too many changes to be reused for something else.

Therefore, instead of spreading files around the project, keep them as close together as possible - in the feature directory:

src
|-- views
  |-- products
    |-- components
      |-- productForm
        |-- ProductForm.tsx
        |-- productFormService.ts
        |-- productFormUtils.tsx
    |-- helpers
      |-- productUtils.ts
    |-- services
      |-- productService.ts
    |-- Products.tsx
    |-- ViewProduct.tsx
    |-- AddProduct.tsx
    |-- EditProduct.tsx
    |-- DeleteProduct.tsx

The product form is now encapsulated in its own directory and can be imported by any of the “products” components. Besides service and utils files for the product form, there are also utilities and services for product pages overall. Since none of these would be used anywhere else in the application, src/components , src/services , and src/helpers are not polluted with unnecessary files. Furthermore, if some of the feature pages would get more complicated, they can also be put in their own directories.
