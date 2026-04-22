# Assets Folder

Place your website images in this folder.

Suggested structure:

- `src/assets/hero/` for hero photos
- `src/assets/cocktails/` for cocktail images
- `src/assets/draft-beer/` for draft beer images

Example import in a component:

```jsx
import heroImage from "../assets/hero/bar-interior.jpg";
```

Then use it:

```jsx
<img src={heroImage} alt="O'briens bar interior" />
```
