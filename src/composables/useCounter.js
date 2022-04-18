import { ref } from "vue";
export default function useCounter(initialValue = 0, setIncrementPoint = 1) {
  const count = ref(initialValue);

  function incrementCounter() {
    count.value += setIncrementPoint;
  }

  return {
    count,
    incrementCounter,
  };
}
