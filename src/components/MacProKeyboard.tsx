function MacProKeyboard() {
     type KeyRow = string[];

  // All rows of the keyboard
  const keys: KeyRow[] = [
    [
      "esc",
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
      "🔊",
      "🔈",
      "🔇",
    ],
    ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
    ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"],
    ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"],
    ["ctrl", "opt", "cmd", "space", "cmd", "opt", "←", "↑", "↓", "→"],
  ];

  // Optional: categorize special key widths
  const isWide = (key: string): boolean => key === "space";
  const isLong = (key: string): boolean =>
    ["tab", "caps", "shift", "delete", "return", "cmd", "ctrl", "opt"].includes(
      key
    );

  const getKeyWidth = (key: string): string => {
    if (isWide(key)) return "w-64";
    if (isLong(key)) return "w-20";
    return "w-10";
  };
  return (
    <div>
         <div className="bg-gray-900 absolute -bottom-16 w-full text-white p-4 rounded-lg max-w-6xl mx-auto shadow-2xl">
          <div className="flex flex-col gap-2 w-full">
            {keys.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-2 justify-center">
                {row.map((key, keyIndex) => (
                  <div
                    key={keyIndex}
                    className={`text-center rounded-md px-2 py-2 bg-gray-700 border border-gray-500 text-base capitalize ${getKeyWidth(
                      key
                    )}`}
                  >
                    {key}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default MacProKeyboard