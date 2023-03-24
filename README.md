# Incremental Static Regeneration

Docs: https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

With ISR, you can retain the benefits of static while scaling to millions of pages.

## How to check if you have implemented it correctly:

To check if you have implemented ISR correctly in your project, you can run ```yarn build``` or ```npm run build``` depending on what you use.

- After running build without implementing ISR, you'll notice the terminal looks like this

![no-isr-1](https://user-images.githubusercontent.com/84540947/227391981-82167b70-ed53-4c38-af3c-ece247ab2d1b.png)

You can see that at the top of the image, next to the /user/[userId] line, there is a lambda sign 'λ'. This means that this route is server side rendered at runtime.


- After running build with correctly implementing ISR, you'll notice the terminal now looks like this

![with-isr](https://user-images.githubusercontent.com/84540947/227391640-45530cb4-3d5d-4e3f-b0ee-ed3503718cf0.png)

You can see that at the top of the image, next to the /user/[userId] line, the lambda sign 'λ' has been replaced with the static circle sign.  This means that this route is automatically rendered as static HTML.
