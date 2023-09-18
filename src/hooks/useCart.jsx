import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";
import { useAuthContext } from "../context/Authcontext";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  /** carts 전체가 아닌 사용자별로 캐시가 되도록 uid 설정 -> uid가 없는 경우 수행되지 않도록 enabled 설정 */
  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  /** 사용자 uid 해당하는 cart 에만 캐시되도록 설정 */
  const addOrUpdateItem = useMutation(
    (Product) => addOrUpdateToCart(uid, Product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );

  /** 사용자 uid 해당하는 cart 에서만 삭제 */
  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
