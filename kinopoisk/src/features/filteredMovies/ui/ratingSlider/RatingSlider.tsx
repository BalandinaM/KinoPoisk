import { Range, getTrackBackground } from 'react-range'
import { RATING } from '../../model'

type Props = {
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export const RatingSlider = ({ value, onChange }: Props) => {
  return (
    <>
      <p>
        Рейтинг {value[0].toFixed(1)} - {value[1].toFixed(1)}
      </p>
      <div style={{ width: '100%', padding: '8px 0' }}>
        <Range
          values={value} // ← массив из двух чисел
          step={RATING.STEP}
          min={RATING.MIN}
          max={RATING.MAX}
          onChange={values => {
            console.log('onChange вызван:', values) // ← проверка
            onChange(values as [number, number])
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '6px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values: value,
                    colors: ['#e0e0e0', '#01b4e4', '#e0e0e0'],
                    min: RATING.MIN,
                    max: RATING.MAX,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                backgroundColor: isDragged ? '#0190b8' : '#01b4e4',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                cursor: 'pointer',
              }}
            />
          )}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '8px',
          }}
        >
          <span>{value[0].toFixed(1)}</span>
          <span>{value[1].toFixed(1)}</span>
        </div>
      </div>
    </>
  )
}
