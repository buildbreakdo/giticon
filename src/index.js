import adler32 from 'react-lib-adler32';

function identicon(string, optionOverrides = {}) {
  const isEmptyString = (
    typeof string !== 'string' ||
    !string.length ||
    string === '[deleted]'
  );
  if (isEmptyString) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">' +
        '<rect fill="#afb3b9" x="10" y="10" width="20" height="20" />' +
      '</svg>'
    );
  }

  const options = {
    background: [240, 240, 240, 255],
    margin:     0.2,
    size:       40,
    saturation: 0.7,
    brightness: 0.5,

    ...optionOverrides
  };

  const hash = Math.abs(adler32(string)).toString().repeat(15);

  // HSL to RGB (hsl2rgb)
  //--------------------------------------------------------------------------
  const hue = parseInt(hash.substr(-7), 16) / 0xfffffff;
  const colors = hsl2rgb(hue, options.saturation, options.brightness)

  const foregroundCssValue = `rgba(${colors.red}, ${colors.green}, ${colors.blue}, 1 )`;
  const backgroundCssValue = 'rgba(' + options.background.join(',') + ')';

  const baseMargin = Math.floor(options.size * options.margin);
  const cell = Math.floor((options.size - (baseMargin * 2)) / 5);
  const margin = Math.floor((options.size - cell * 5) / 2);

  // the first 15 characters of the hash control the pixels (even/odd)
  // they are drawn down the middle first, then mirrored outwards
  let color;
  const rectangles = [];

  hash.split('').forEach((char, i) => {
    color = parseInt(hash.charAt(i), 16) % 2 ? backgroundCssValue : foregroundCssValue;

    if (i < 5) {
      rectangles.push({
        x: 2 * cell + margin,
        y: i * cell + margin,
        w: cell,
        h: cell,
        color: color
      });
    } else if (i < 10) {
      rectangles.push({
        x: 1 * cell + margin,
        y: (i - 5) * cell + margin,
        w: cell,
        h: cell,
        color: color
      });
      rectangles.push({
        x: 3 * cell + margin,
        y: (i - 5) * cell + margin,
        w: cell,
        h: cell,
        color: color
      });
    } else if (i < 15) {
      rectangles.push({
        x: 0 * cell + margin,
        y: (i - 10) * cell + margin,
        w: cell,
        h: cell,
        color: color
      });
      rectangles.push({
        x: 4 * cell + margin,
        y: (i - 10) * cell + margin,
        w: cell,
        h: cell,
        color: color
      });
    }
  });

  rectangles.map(rect => {
    return {
      x: Math.floor(rect.x),
      y: Math.floor(rect.y),
      w: Math.floor(rect.w),
      h: Math.floor(rect.h),
      color: rect.color
    }
  })

  // Input:
  // <rect x="2" y="2" fill="#FFFFFF" width="2" height="2"/>
  // <rect x="2" y="6" fill="#FFFFFF" width="2" height="2"/>
  // <rect x="2" y="10" fill="#FFFFFF" width="2" height="2"/>
  // Paths:
  // <path fill="#fff" d="M2,2 h2 v2 h-2z"/>
  // <path fill="#fff" d="M2,6 h2 v2 h-2z"/>
  // <path fill="#fff" d="M2,10 h2 v2 h-2z"/>
  // Output:
  // <path fill="#fff" d="M2,2 h2 v2 h-2z M2,6 h2 v2 h-2z M2,10 h2 v2 h-2z"/>
  return (`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="background-color: ${backgroundCssValue};" viewBox="0 0 40 40"><path shape-rendering="crispEdges" style="fill: ${foregroundCssValue}; stroke: ${foregroundCssValue}; strokeWidth: ${1}; max-width: 100%; max-height: 100%;" d="${rectangles.filter(rect => rect.color !== backgroundCssValue).map((rect, i) => {
    // Start at point M(x,y)
    // Draw a (h)orizontal line of width
    // Then from that point draw a vertical line
    // Then from that point draw a horizontal line
    // Then from that point closePath draw a straight line from the current position, to the first point in the path.
    return `M${rect.x},${rect.y} h${rect.w} v${rect.h} h${0 - rect.h}z`;
  }).join(' ')}" /></svg>`)
}

function hsl2rgb(h, s, b) {
  h *= 6;
  s = [
    b += s *= b < .5 ? b : 1 - b,
    b - h % 1 * s * 2,
    b -= s *= 2,
    b,
    b + h % 1 * s,
    b + s
  ];

  return {
    red: Math.round(s[ ~~h    % 6 ] * 255),
    green: Math.round(s[ (h|16) % 6 ] * 255),
    blue: Math.round(s[ (h|8)  % 6 ] * 255)
  };
}

export default identicon;