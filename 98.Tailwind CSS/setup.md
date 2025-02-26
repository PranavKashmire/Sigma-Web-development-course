<!-- now we make a setup.md file where we setup the Tailwind css -->

s1 : run the following commands-
    
    npm install -D tailwindcss
    npx tailwindcss init


s2 : update tailwind.conf.js file to include this line-

     content: ["*.html"],



s3 : create src/input.css to include:
        
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        

s4: include the src/output.css  file to your html

s5: run the following command:

    npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

<!-- now click live preview -->
