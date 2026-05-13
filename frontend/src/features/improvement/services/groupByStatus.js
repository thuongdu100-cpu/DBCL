// features/improvement/utils/groupByStatus.js

export default function groupByStatus(data) {

  return data.reduce((acc, item) => {

    if (!acc[item.status]) {
      acc[item.status] = [];
    }

    acc[item.status].push(item);

    return acc;

  }, {});
}