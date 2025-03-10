# foxy-js-slider

## Purpose

The **foxy-js-slider** provides code to make a slider slideable. It is intended to work in the following ways:

- **Desktop:** Enables click and drag, mousewheel scrolling, and button-based navigation (next/previous).
- **Mobile:** Preserves native touch scrolling.
- **Customization:** Respects an edge padding variable so that the slider stops with a consistent gap between the slider item and the screen edge.

This allows users to choose their preferred scrolling method while ensuring the slider items always align nicely with your site’s layout.

## Deployment

Currently, you will need to build the slider manually (until the automated GitHub Actions build is working for you) using the following steps:

1. **Build the Code**

   Open your terminal in the project directory and run:

   ```
   npm run build
   ```

   This will minify your JavaScript using Terser and output the latest code to `dist/slider.min.js`.

2. **Commit and Push**

   After building, commit the updated file and push it to your repository:

   ```
   git add dist/slider.min.js
   git commit -m "chore: update slider.min.js"
   git push
   ```

3. **Tag the Release**

   Tag the commit with the current version number (e.g., `v1.0.0`):

   ```
   git tag v1.0.0
   git push origin --tags
   ```

4. **Access via jsDelivr**

   Your minified file can now be accessed via jsDelivr. For example:

   ```
   https://cdn.jsdelivr.net/gh/FoxyLetterOpener/foxy-js-slider@v1.0.0/dist/slider.min.js
   ```

   Replace the version number as needed when you update.

## Slider Functionality

The **foxy-js-slider** includes the following features:

### 1. Scroll via Button

- **Next and Previous Buttons:**  
  Moves one item at a time left or right.
  - These movements respect a CSS variable for edge padding, ensuring that the slider stops with the proper amount of space between the item and the screen edge.
  - The code retrieves the up-to-date edge padding value from the slider’s container so that if your CSS updates with responsive breakpoints, the slider aligns correctly.

### 2. Scroll via Click and Drag

- On desktop, users can click and drag the slider, providing an intuitive navigation experience.

### 3. Scroll via Mousewheel

- The slider preserves native mousewheel scrolling on desktop.

### 4. Scroll via Native Touch Action

- On mobile devices, the slider leverages native touch scrolling, ensuring a smooth and responsive experience.

## Slider Appearance

Customize the appearance of your slider using CSS. Key points include:

- **Scrollbar:**  
  The default scrollbar is hidden using vendor-specific CSS so that the slider looks clean.
- **Edge Padding:**  
  A CSS variable (e.g., `--_layout---edgepadding`) is used to define the padding at the edges. Ensure this variable is defined in your global CSS or within the slider container’s styles.

## Instructions

### HTML/CSS Setup

1. **HTML Markup**

   Include a container for the slider, a list of slider items, and navigation buttons. For example:

   ```
   <div class="slider-container">
     <div class="slider-list">
       <div class="slider-item">Item 1</div>
       <div class="slider-item">Item 2</div>
       <div class="slider-item">Item 3</div>
       <!-- Add more slider items as needed -->
     </div>
     <button class="slider-prev-btn">Prev</button>
     <button class="slider-next-btn">Next</button>
   </div>
   ```

2. **CSS Setup**

   Ensure you have the necessary CSS to hide the scrollbar and define the edge padding. For example:

   ```
   :root {
     --_layout---edgepadding: 16px;
   }
   
   .slider-container {
     position: relative;
     /* additional container styles */
   }
   
   .slider-list {
     display: flex;
     overflow-x: scroll;
     scrollbar-width: none; /* Firefox */
     -ms-overflow-style: none; /* IE and Edge */
   }
   
   .slider-list::-webkit-scrollbar {
     display: none; /* Chrome, Safari, Opera */
   }
   
   .slider-item {
     flex: 0 0 auto;
     /* styling for each slider item */
   }
   
   .slider-prev-btn,
   .slider-next-btn {
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     /* additional button styles */
   }
   
   .slider-prev-btn {
     left: 0;
   }
   
   .slider-next-btn {
     right: 0;
   }
   ```

3. **JavaScript Integration**

   Include the slider script in your page by referencing the jsDelivr URL:

   ```
   <script src="https://cdn.jsdelivr.net/gh/FoxyLetterOpener/foxy-js-slider@v1.0.0/dist/slider.min.js" defer></script>
   ```

   This will load and initialize the slider functionality on your page.

## Usage

Once you have the HTML, CSS, and JavaScript set up as described, your slider should work as follows:

- **Desktop Users:** Can click and drag, use the next/prev buttons, or scroll with the mouse wheel.
- **Mobile Users:** Will enjoy native touch scrolling.
- **Customization:** You can adjust the edge padding variable and other styles to match your site’s design.

## Contributing

If you’d like to contribute to **foxy-js-slider**, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Open a pull request describing your changes.

## License

This project is licensed under the MIT License.
