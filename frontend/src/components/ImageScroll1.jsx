import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './css/ImageScroll.css';

// React component for the image scroll
const ImageScroll1 = () => {
  // Reference to the container element
  const containerRef = useRef(null);

  // Effect for handling scroll and setting up horizontal loop
  useEffect(() => {
    // Function to initialize the horizontal loop animation
    const initializeHorizontalLoop = () => {
      // Get all elements with the class 'image'
      const items = gsap.utils.toArray('.image');

      // Create the horizontal loop animation
      const loop = horizontalLoop(items, { speed: 0.5, repeat: -1, paddingRight: '10vw'});

      // Function to set the direction of the loop based on scroll position
      const setDirection = value => {
        if (loop.direction !== value) {
          gsap.to(loop, { timeScale: value, duration: 0.3, overwrite: true });
          loop.direction = value;
        }
      };

      // Event listener for scroll events to adjust the loop direction
      const handleScroll = () => {
        setDirection(window.scrollY > 0 ? 1 : -1);
      };

      // Attach scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup function to remove the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // Call the initialization function
    initializeHorizontalLoop();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Effect for initializing the horizontal loop animation on component mount
  useEffect(() => {
    // Function to initialize the horizontal loop animation on component mount
    const initializeHorizontalLoopOnMount = () => {
      // Get all elements with the class 'image'
      const items = gsap.utils.toArray('.image');

      // Create the horizontal loop animation
      const loop = horizontalLoop(items, { speed: 0.5, repeat: -1,paddingRight: '10vw' });

      // Pre-render the loop for performance
      loop.progress(1, true).progress(0, true);

      // Cleanup function to kill the GSAP timeline on component unmount
      return () => {
        loop.kill();
      };
    };

    // Call the initialization function on component mount
    initializeHorizontalLoopOnMount();
  }, []); // Empty dependency array ensures this effect runs only once on mount

// JSX for the component
return (
    <div className="wrapper" ref={containerRef}>
      <div className="imageContainer">
        {/* Repeat this div for each image */}
        <div className="image"><div className='imageFade'></div></div>
        <div className="image"><div className='imageFade'></div></div>
        <div className="image"><div className='imageFade'></div></div>
        <div className="image"><div className='imageFade'></div></div>
        <div className="image"><div className='imageFade'></div></div>
        <div className="image"><div className='imageFade'></div></div>
        <div className="image"><div className='imageFade'></div></div>
        <div className="image"><div className='imageFade'></div></div>
        <div className="image"><div className='imageFade'></div></div>
      </div>
    </div>
  );  
};

// Function to create a horizontal loop animation using GSAP
function horizontalLoop(items, config) {
    // Convert the items to an array
    items = gsap.utils.toArray(items);
  
    // Set the configuration or use default values
    config = config || {};
    
    // Create a GSAP timeline
    let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    });
  
    // Get the number of items
    let length = items.length-1;
  
    // Get the initial left offset of the first item
    let startX = items[0].offsetLeft;
  
    // Arrays to store times, widths, and xPercents for each item
    let times = [];
    let widths = [];
    let xPercents = [];
  
    // Current index of the loop
    let curIndex = 0;
  
    // Calculate pixels per second based on speed
    let pixelsPerSecond = (config.speed || 0.5) * 100;
  
    // Snap function to adjust values based on a specified interval
    let snap =
      config.snap === false
        ? (v) => v
        : gsap.utils.snap(config.snap || 1);
  
    // Set xPercent values for each item
    gsap.set(items, {
      xPercent: (i, el) => {
        // Get the width of the item
        let w = (widths[i] = parseFloat(
          gsap.getProperty(el, "width", "px")
        ));
  
        // Calculate and snap the xPercent value
        xPercents[i] = snap(
          parseFloat(gsap.getProperty(el, "x", "px")) / w +
            gsap.getProperty(el, "xPercent")
        );
  
        // Return the calculated xPercent value
        return xPercents[i];
      },
    });
  
    // Set initial x position for all items
    gsap.set(items, { x: 0 });
  
    // Calculate the total width of the loop
    let totalWidth =
      items[length - 1].offsetLeft +
      xPercents[length - 1] / 100 * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
  
    // Loop through each item to create animations
    for (let i = 0; i < length; i++) {
      let item = items[i];
      let curX = (xPercents[i] / 100) * widths[i];
  
      // Calculate distances
      let distanceToStart = item.offsetLeft + curX - startX;
      let distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      
      // Animation for moving items to the left
      tl.to(item, {
        xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
        duration: distanceToLoop / pixelsPerSecond
      }, 0)
        // Animation for moving items back to the right
        .fromTo(
          item,
          { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) },
          { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false },
          distanceToLoop / pixelsPerSecond
        )
        // Add a label for each item
        .add("label" + i, distanceToStart / pixelsPerSecond);
      
      // Store the time for each item
      times[i] = distanceToStart / pixelsPerSecond;
    }
  
    // Function to tween to a specific index
    function toIndex(index, vars) {
      vars = vars || {};
  
      // Adjust index for wrapping
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
  
      // Calculate the new index and time
      let newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];
  
      // Adjust time if wrapping
      if (time > tl.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
  
      // Update current index
      curIndex = newIndex;
  
      // Set overwrite and tween to the new time
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
  
    // Add functions to the timeline object for navigation
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
  
    // Pre-render the loop for performance
    tl.progress(1, true).progress(0, true);
  
    // Reverse the timeline if specified
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
  
    // Return the GSAP timeline
    return tl;
  }  

// Export the component
export default ImageScroll1;
