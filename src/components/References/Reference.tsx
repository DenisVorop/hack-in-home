import React from 'react';
import { TReferences } from '../../types/types';

interface ReferenceProps {
    index: number
    visibleIndexReference: number
    setVisibleIndexReference: (index: number) => void
    reference: TReferences
}

const Reference: React.FC<ReferenceProps> = ({ index, visibleIndexReference, setVisibleIndexReference, reference }) => {
    return (
        <div className='mb8'>
            <div className="secondary-bar-account__question">
                <div className="reference-question account-text" onClick={() => setVisibleIndexReference(index)}>
                    {index + 1}) {reference.question}
                </div>
            </div>
            {index === visibleIndexReference &&
                <div className="reference-answer account-pre-label">
                    <div className="reference-answer__department">Справку можно получить {reference.department}</div>
                    <div className="reference-answer__cabinet">{reference.cabinet}</div>
                    <div className="reference-answer__phone">
                        Телефон отдела: <a href={`tel:${reference.phone}`}>{reference.phone}</a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Reference
