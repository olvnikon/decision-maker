export const onAction = <T>(callback: (value: T) => void, setState: (value: boolean) => void) => (
  positive: boolean = false
) => (value?: T) => {
  setState(false);
  positive && callback(value!);
};
