function Layout({ children }) {
  return (
    <div class="flex flex-col w-full items-center">
      <div class="w-2/3">{children}</div>
    </div>
  );
}

export default Layout;
