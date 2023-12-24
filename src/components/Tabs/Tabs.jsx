export default function Tabs({
  children,
  buttons,
  ButtonsContainers = "menu"
}) {
  return (
    <>
      <ButtonsContainers>{buttons}</ButtonsContainers>
      {children}
    </>
  );
}
