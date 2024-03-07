-- Table name and schema query
SELECT
*
FROM
  information_schema."tables"


--   Primary key and column query in pg 
SELECT
  tc.table_schema,
  tc.table_name,
  tc.constraint_name,
  tc.constraint_type,
  kcu.column_name
FROM
  information_schema.table_constraints AS tc
  JOIN information_schema.key_column_usage AS kcu ON tc.constraint_catalog = kcu.constraint_catalog
    AND tc.constraint_schema = kcu.constraint_schema
    AND tc.constraint_name = kcu.constraint_name
  LEFT JOIN pg_index AS idx ON tc.constraint_name = idx.indexrelid::regclass::text
WHERE
  tc.table_name = 'user' -- Replace 'your_table_name' with your actual table name
  AND tc.table_schema = 'public' -- Replace 'your_schema_name' with your actual schema name, e.g., 'public'
ORDER BY
  tc.table_schema,
  tc.table_name,
  tc.constraint_name,
  kcu.ordinal_position;

