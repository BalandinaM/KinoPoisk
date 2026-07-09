import { Range, getTrackBackground } from 'react-range'
import { RATING } from '../../model'
import s from './RatingSlider.module.css'

type Props = {
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export const RatingSlider = ({ value, onChange }: Props) => {
  return (
    <div className={s.wrap}>
      <p className={s.label}>
        Рейтинг {value[0].toFixed(1)} - {value[1].toFixed(1)}
      </p>
      <div style={{ width: '100%' }}>
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
                height: '18px',
                display: 'flex',
                width: '100%',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '4px',
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
                height: '12px',
                width: '12px',
                borderRadius: '50%',
                backgroundColor: isDragged ? '#0190b8' : '#01b4e4',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                cursor: 'pointer',
              }}
            />
          )}
        />
        {/* <div className={s.values}>
          <span>{value[0].toFixed(1)}</span>
          <span>{value[1].toFixed(1)}</span>
        </div> */}
      </div>
    </div>
  )
}
