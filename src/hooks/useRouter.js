import routes from "../routes";

export default function useRouter() {
  const path = window.location.pathname;
  const route = routes(path);
  return [route.value, route.params];
}
