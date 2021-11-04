interface Props {
  children: any[];
}

const ContainerWithHr = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        background: "white",
        width: "fit-content",
        height: 50,
      }}
    >
      {children.map((child, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: 5,
            }}
          >
            {child}
          </div>

          {children.length - 1 !== index && (
            <hr
              style={{
                border: "none",
                borderLeft: "2px solid hsla(200, 10%, 50%,100)",
                height: "100%",
                width: "50%",
                margin: 5,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ContainerWithHr;
