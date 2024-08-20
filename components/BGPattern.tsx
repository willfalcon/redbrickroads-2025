type Props = {
  reverse: boolean
}
export default function BGPattern({reverse}: Props) {

  return (
    <div className="absolute w-full h-full left-0 top-0 z-0 bg-decoOrange overflow-hidden">
      {reverse ? (
        <>
            <div
              className="absolute bg-decoPink"
              style={{
                height: '150%',
                width: '100%',
                transform: 'rotate(11deg)',
                right: '65%',
                top: '-50%',
              }}
            />
          <div
            className="absolute bg-decoYellow"
            style={{
              height: '150%',
              width: '100%',
              transform: 'rotate(-27deg)',
              left: '65%',
              top: '-50%',
            }}
          />

        </>
      ) : (
        <>
          <div
            className="absolute bg-decoYellow"
            style={{
              height: '150%',
              width: '100%',
              transform: 'rotate(27deg)',
              right: '65%',
              top: '-50%',
            }}
          />

          <div
            className="absolute bg-decoPink"
            style={{
              height: '150%',
              width: '100%',
              transform: 'rotate(-11deg)',
              left: '65%',
              top: '-50%',
            }}
          />
        </>
      )}
    </div>
  );
}