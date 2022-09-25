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