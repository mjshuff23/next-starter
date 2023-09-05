import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post!</h1>
      <h2>
        {/* The Link component enables client-side navigation between two pages in the same Next.js app.
            - Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser. */}
        {/* Here’s a simple way you can verify it:
            - Use the browser’s developer tools to change the background CSS property of <html> to yellow.
            - Click on the links to go back and forth between the two pages.
            - You’ll see that the yellow background persists between page transitions.
            - This shows that the browser does not load the full page and client-side navigation is working. */}
        <Link href='/'>Back to Home</Link>
        {/* If you’ve used <a href="…"> instead of <Link href="…"> and did this, the background color will be cleared on link clicks because the browser does a full refresh. */}
      </h2>
    </>
  );
}
