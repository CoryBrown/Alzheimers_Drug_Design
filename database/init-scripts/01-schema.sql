-- Create a table for storing molecular data
CREATE TABLE molecules (
    id SERIAL PRIMARY KEY,
    smiles TEXT NOT NULL,
    name TEXT,
    properties JSONB
);

-- Create indexes if needed
CREATE INDEX idx_molecules_smiles ON molecules USING GIN (smiles);
