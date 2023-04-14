import { useDispatch, useSelector } from 'react-redux';

import { addFilter } from '../store/filters/filterActions';

import { selectVisiblePositions } from '../store/positions/positionSelectors';
import { selectAllFilters } from '../store/filters/filterSelectors';

import { JobPosition } from './JobPosition';

const JobList = () => {
  const currentFilters = useSelector(selectAllFilters);

  const data = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const disatch = useDispatch();
  const handleAddFilter = (filter) => {
    disatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {data.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
