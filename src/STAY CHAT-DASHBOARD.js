:root {
    --primary - color: #c026d3;
    --primary - hover: #d946ef;
    --bg - color: #0b0e14;
    --surface - color: #13151b;
    --surface - light: #1c1f26;
    --text - primary: #ffffff;
    --text - secondary: #9ca3af;
    --text - muted: #6b7280;
    --border - color: #1f2937;
    --success - color: #22c55e;
    --danger - color: #ef4444;
    --border - radius - lg: 12px;
    --border - radius - md: 8px;
    --border - radius - sm: 6px;

    font - family: 'Inter', system - ui, -apple - system, sans - serif;
    color - scheme: dark;
}

* {
    box- sizing: border - box;
margin: 0;
padding: 0;
}

body {
    background - color: var(--bg - color);
    color: var(--text - primary);
    -webkit - font - smoothing: antialiased;
    -moz - osx - font - smoothing: grayscale;
}

a {
    text - decoration: none;
    color: inherit;
}

button {
    border: none;
    background: none;
    cursor: pointer;
    font - family: inherit;
    color: inherit;
}

/* Scrollbar styling */
:: -webkit - scrollbar {
    width: 6px;
    height: 6px;
}

:: -webkit - scrollbar - track {
    background: transparent;
}

:: -webkit - scrollbar - thumb {
    background: #374151;
    border - radius: 4px;
}

:: -webkit - scrollbar - thumb:hover {
    background: #4b5563;
}