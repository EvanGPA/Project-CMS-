// src/components/ui/input.js
const Input = ({ className, ...props }) => (
    <input className={`px-3 py-2 border rounded ${className}`} {...props} />
  );
  
  export default Input;