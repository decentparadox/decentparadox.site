'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveGridLayout = WidthProvider(Responsive)

const BentoBox = () => {
    const mainLayout = [
        { i: 'a', x: 0, y: 0, w: 2, h: 1 },
        { i: 'b', x: 2, y: 0, w: 1, h: 1 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 },
        { i: 'd', x: 0, y: 1, w: 1, h: 1 },
        { i: 'e', x: 1, y: 1, w: 2, h: 1 },
        { i: 'f', x: 0, y: 3, w: 1, h: 2 },
        { i: 'g', x: 1, y: 3, w: 2, h: 1 },
        { i: 'h', x: 3, y: 3, w: 1, h: 1 },
        { i: 'i', x: 1, y: 4, w: 1, h: 1 },
        { i: 'j', x: 2, y: 4, w: 2, h: 1 },
    ]

    const mobileLayout = [
        { i: 'a', x: 0, y: 0, w: 2, h: 1 }, // A (2x1)
        { i: 'e', x: 0, y: 1, w: 2, h: 1 }, // E (2x1)
        { i: 'f', x: 0, y: 2, w: 1, h: 2 }, // F (1x2)
        { i: 'b', x: 1, y: 2, w: 1, h: 1 }, // B (1x1)
        { i: 'd', x: 0, y: 4, w: 1, h: 1 }, // D (1x1)
        { i: 'c', x: 1, y: 3, w: 1, h: 2 }, // C (1x2)
        { i: 'g', x: 0, y: 5, w: 2, h: 1 }, // G (2x1)
        { i: 'h', x: 0, y: 6, w: 1, h: 1 }, // H (1x1)
        { i: 'i', x: 1, y: 6, w: 1, h: 1 }, // I (1x1)
        { i: 'j', x: 0, y: 7, w: 2, h: 1 }, // J (2x1)
    ];
    

    const [rowHeight, setRowHeight] = useState(280)

    const handleWidthChange = (width) => {
        if (width <= 500) {
            setRowHeight(158)
        } else if (width <= 1100) {
            setRowHeight(180)
        } else {
            setRowHeight(280)
        }
    }

    return (
        <div className="react-grid-container">
            <ResponsiveGridLayout
                className="layout"
                layouts={{ lg: mainLayout, md: mainLayout, sm: mobileLayout }}
                breakpoints={{ lg: 1199, md: 799, sm: 374 }}
                cols={{ lg: 4, md: 4, sm: 2 }}
                rowHeight={rowHeight}
                isResizable={false}
                onWidthChange={handleWidthChange}
                isBounded={true}
                margin={[16, 16]}
                useCSSTransforms={true}
            >
                <div key="a">Child A</div>
                <div key="b">Child B</div>
                <div key="c">Child C</div>
                <div key="d">Child D</div>
                <div key="e">Child E</div>
                <div key="f">Child F</div>
                <div key="g">Child G</div>
                <div key="h">Child H</div>
                <div key="i">Child I</div>
                <div key="j">Child J</div>
            </ResponsiveGridLayout>
        </div>
    )
}

export default BentoBox
