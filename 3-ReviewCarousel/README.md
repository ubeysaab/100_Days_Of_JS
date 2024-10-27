





For object-fit to work image(or other element) needs to have a width and height.
Try setting it to
	width:100%; 
	height:100%;
Also make sure that the container has a height and width.


How to create gradient borders in CSS : 
To apply a gradient to a border, the most straightforward approach is to use the border-image property

```css
section__buttons > div > button {
  background-color: transparent;
  color: var(--baseColor);
  font-size: 1rem;
  padding: 5px;


  border: 3px solid;

  border-image: linear-gradient(126deg, var(--baseColor) 50%, var(--secondColor) 50%);



  border-image-slice: 1;
  border-radius: 15px;   /* 🤺doesn't work */
}

```

The `  border-image-slice: 1;` after the linear-gradient declaration is the border-image-slice value. By using 1, we specify we want a single border region.

> The downside of this approach is that you can't combine border-image with border-radius. 🤷‍♂️


**Alternative approach**






```css

section__buttons > div > button {
  background: linear-gradient(white, white) padding-box, linear-gradient(130deg, var(--baseColor) 50%, var(--secondColor) 50%) border-box;
  border-radius: 9px;
  border: 2px solid transparent;

}
```



The 'padding-box' and 'border-box' values specified after the linear gradients represent the background-clip values.

The first linear gradient is limited to the padding box (i.e., all the content of the element, except the borders). It's a 'fake' gradient because we're using the same color twice; we're using it to mask the second background gradient with the background color.

The second gradient sits below the first one and is used to apply the desired gradient colors. Unlike the first one, the second gradient covers the border area (background-clip: border-box).

Finally, the transparent border is required to separate the border-box from the padding box (otherwise they would be identical and the first gradient would completely cover the second one).



## Resources 


[Gradient Border](https://codyhouse.co/nuggets/css-gradient-borders#alternative-approach)
