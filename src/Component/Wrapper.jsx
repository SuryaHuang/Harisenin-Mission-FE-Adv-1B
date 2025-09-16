const Wrapper = ({
  content,
  wrapper,
  formBox,
  FormComponent,
  HeaderComponent,
}) => {
  return (
    <div className={content}>
      <div className={wrapper}>
        <div className={formBox}>
          <HeaderComponent />
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
