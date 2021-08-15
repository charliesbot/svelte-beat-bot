export async function get() {
  const date = new Date().toString();
  return {
    body: {
      date,
    },
    status: 200,
  };
}
