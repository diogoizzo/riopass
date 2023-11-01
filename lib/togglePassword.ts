export default function togglePassword(input: HTMLInputElement | null) {
   if (input) {
      if (input.type === 'password') {
         input.type = 'text';
      } else {
         input.type = 'password';
      }
   }
}
