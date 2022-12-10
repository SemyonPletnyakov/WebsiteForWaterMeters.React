import React from 'react';

const SearchResult = ({person}) => {

    return (
        <div>
            Результат:<br/>
            Лицевой счёт {person.id}<br/>
            Сумма к оплате {person.сounter1}<br/>
        </div>
    );
};

export default SearchResult;