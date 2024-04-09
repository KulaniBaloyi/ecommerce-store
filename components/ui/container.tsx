interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container: React.FC<ContainerProps> = ({
    children
  }) => {
    return ( 
      <div className="mx-auto p-[5%] lg:mx-[10%]">
        {children}
      </div>
     );
  };
  
  export default Container;